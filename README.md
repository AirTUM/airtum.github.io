# AirTUM — Aerospace Community @ TUM Campus Heilbronn

[![Deploy to GitHub Pages](https://github.com/airtum/airtum.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/airtum/airtum.github.io/actions/workflows/deploy.yml)

> **Build. Fly. Analyze.** — The home for autonomous UAV developers at TUM Campus Heilbronn.

Live site: [https://airtum.de](https://airtum.de)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| 3D Engine | Three.js + React Three Fiber + Drei |
| Animations | Framer Motion |
| Hosting | GitHub Pages (custom domain) |

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Custom Domain Setup (airtum.de)

To configure the custom domain `airtum.de` for GitHub Pages:

### Step 1 — Create the CNAME file

Create a file named `CNAME` in the **root of this repository** with the following content:

```
airtum.de
```

> ⚠️ **Important:** The GitHub Actions workflow (`deploy.yml`) automatically copies the `CNAME` file into the `dist/` folder during the build step, so GitHub Pages will always serve the correct domain.

### Step 2 — Configure DNS Records

In your domain registrar's DNS settings for `airtum.de`, add the following records:

**For the apex domain (`airtum.de`):**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For the `www` subdomain:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | airtum.github.io |

### Step 3 — Enable GitHub Pages

1. Go to your repository **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter `airtum.de`
4. Check **Enforce HTTPS** once DNS propagates (can take up to 48 hours)

---

## 📁 Project Structure

```
airtum.github.io/
├── public/
│   └── lark.glb              # Flightory Lark 3D model (add your own)
├── src/
│   ├── components/
│   │   ├── Scene.jsx          # R3F 3D canvas background
│   │   ├── Navbar.jsx         # Glassmorphic navigation
│   │   ├── HeroSection.jsx    # Landing hero with CTA
│   │   ├── AboutSection.jsx   # Makerspace & community info
│   │   ├── ProjectSection.jsx # Flagship UAV project showcase
│   │   ├── OpenSourceSection.jsx # Open source & join us
│   │   └── Footer.jsx         # Site footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── CNAME                      # Custom domain file
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD pipeline
└── vite.config.js
```

---

## ✈️ The AirTUM UAV — Genesis Project

Our flagship project is an **Autonomous Aerial Air Quality Monitor** built on the **Flightory Lark** fixed-wing airframe. It measures PM2.5, CO₂, VOC, and NOx across urban and campus environments.

### Hardware
- **Airframe:** Flightory Lark, 1290mm wingspan, LW-PLA/PETG
- **Flight Controller:** AtomRC F405-NAVI running ArduPlane
- **Telemetry:** MAVLink over 915MHz radio
- **Sensor MCU:** Seeed XIAO ESP32-S3
- **Sensors:** Sensirion SEN55, SCD41, BME688 + Bosch BME688

### Software
- ArduPlane mission planning (QGroundControl / Mission Planner)
- Python data pipeline: GPS-tagged sensor logs → heatmap visualizations
- Custom CAD: Sensor-bay nose modification (Fusion 360 / FreeCAD)

---

## 🤝 Contributing

All hardware designs, CAD files, and software are open-source. Contributions welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

*AirTUM — TUM Campus Heilbronn Aerospace Community*
