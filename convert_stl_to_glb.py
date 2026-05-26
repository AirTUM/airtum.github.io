"""
Merge all Lark STL parts into a single lark.glb for Three.js.
Fixes: recompute normals, correct orientation (nose +X, wings spread +Z, up = +Y).
"""
import pathlib
import numpy as np
import trimesh

STL_ROOT = pathlib.Path(
    r"C:\Users\gero\vManstein Cloud\TUM\Studium\4-sem"
    r"\INHN0018-CPS-embedded_systems-cyber_physical_systems_robotics"
    r"\project\ss26-team_16-airtum\3d_models\STL"
)
OUT_GLB = pathlib.Path("public/lark.glb")

COLOUR_MAP = {
    "FUSELAGE": [0.92, 0.93, 0.94],
    "WINGS":    [0.88, 0.90, 0.92],
    "TAIL":     [0.85, 0.87, 0.90],
}

meshes = []
for folder, colour in COLOUR_MAP.items():
    folder_path = STL_ROOT / folder
    if not folder_path.exists():
        print(f"  [SKIP] {folder_path}")
        continue
    for stl_file in sorted(folder_path.glob("*.STL")):
        try:
            m = trimesh.load_mesh(str(stl_file))
            if isinstance(m, trimesh.Scene):
                parts = list(m.geometry.values())
                if not parts:
                    continue
                m = trimesh.util.concatenate(parts)
            # Assign vertex colour
            rgba = [int(c * 255) for c in colour] + [255]
            m.visual = trimesh.visual.ColorVisuals(mesh=m, vertex_colors=rgba)
            meshes.append(m)
            print(f"  [OK] {stl_file.name}")
        except Exception as e:
            print(f"  [ERR] {stl_file.name}: {e}")

if not meshes:
    raise RuntimeError("No meshes loaded!")

print(f"\nMerging {len(meshes)} parts...")
combined = trimesh.util.concatenate(meshes)

# Recompute vertex normals for correct lighting
combined.fix_normals()

# Centre at origin
combined.apply_translation(-combined.bounding_box.centroid)

# Scale: longest axis = 4 units
extents = combined.bounding_box.extents
scale = 4.0 / max(extents)
combined.apply_scale(scale)

# The STL files are Z-up, nose along -Y (typical CAD export).
# We want: nose along +Z, wings along +X, up = +Y
# Step 1: rotate -90 deg around X  (Z-up -> Y-up)
r1 = trimesh.transformations.rotation_matrix(np.radians(-90), [1, 0, 0])
combined.apply_transform(r1)

# After rotation check extents: longest axis should be wingspan (X)
extents2 = combined.bounding_box.extents
print(f"Extents after rotation: X={extents2[0]:.2f}  Y={extents2[1]:.2f}  Z={extents2[2]:.2f}")

# If the fuselage (longest) is along Y instead of Z, rotate 90 deg around Y
if extents2[1] > extents2[2] and extents2[1] > extents2[0]:
    r2 = trimesh.transformations.rotation_matrix(np.radians(90), [0, 1, 0])
    combined.apply_transform(r2)
    print("Applied extra Y rotation to align fuselage along Z")

# Re-centre after rotations
combined.apply_translation(-combined.bounding_box.centroid)

OUT_GLB.parent.mkdir(parents=True, exist_ok=True)
combined.export(str(OUT_GLB))
size_kb = OUT_GLB.stat().st_size / 1024
print(f"\nExported -> {OUT_GLB}  ({size_kb:.0f} KB)")
