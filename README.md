<div align="center">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</div>

<h1 align="center">📱 Product Catalog</h1>

<p align="center">
  <strong>A beautifully designed, full-stack e-commerce experience for tech enthusiasts to discover and purchase phones, tablets, and accessories.</strong>
</p>

<p align="center">
  <a href="https://product-catalog-frontend.github.io/product-catalog-frontend/">
    <img src="https://img.shields.io/badge/View_Demo-Live_Site-success?style=for-the-badge&logo=vercel" alt="View Demo Here" />
  </a>
</p>

<br />

## ✨ Features

Experience a seamless shopping journey with our carefully crafted functionalities:

- 🛒 **Complete E-commerce Flow:** From exploring the product catalog to a secure checkout experience powered by **Stripe**.
- 🌗 **Adaptive UI:** Elegant **Dark & Light modes** that respect your system preferences and toggle instantly.
- 🌍 **Internationalization (i18n):** Built-in support for multiple languages (English & Ukrainian) to cater to a global audience.
- 📱 **Responsive Design:** Fluid layouts with interactive carousels (Swiper) suitable for any device screen.
- ❤️ **Wishlist & Cart Management:** Add items to your favorites or cart, with state persisted locally.
- ⚡ **Lightning Fast:** Instant visual feedback with skeleton loaders and optimized asset delivery via Vite.
- 🔍 **Smart Discovery:** Quick debounced search, reliable pagination, and advanced sorting capabilities.

## 🛠 Tech Stack

Built with modern web technologies to ensure performance, scalability, and maintainability:

- **Frontend Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Dev Server:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) & [Redux Toolkit](https://redux-toolkit.js.org/)
- **Payments Processing:** [Stripe](https://stripe.com/)
- **Backend / Database:** [Supabase](https://supabase.com/)
- **Styling:** Vanilla CSS / Sass / CSS Modules
- **Code Quality:** ESLint, Prettier, Husky, lint-staged

## 🚀 Installation & Setup

Want to run the project locally? Follow these steps:

### Prerequisites

- **Node.js**: v20.x or higher
- **npm**: v9.x or higher

### Step-by-Step Guide

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/product-catalog-frontend/product-catalog-frontend.git
    cd product-catalog-frontend
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your Supabase credentials and Stripe publishable key:

    ```env
    VITE_SUPABASE_URL=your_supabase_project_url_here
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
    VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Navigate to [http://localhost:5173](http://localhost:5173) to see the app in action!

## 💡 Usage

Here are a few ways to interact with the project:

- **Browse Products:** Use the top navigation to explore `Phones`, `Tablets`, or `Accessories`.
- **Toggle Theme & Language:** Click the moon/sun icon in the header to intuitively switch between light and dark modes, or use the language selector to switch translations.
- **Manage Options & Cart:** Click on any product to see details, adjust capacities/colors, and add it to your cart. Click the Cart icon in the header to view your selected items, adjust quantities, or proceed to checkout.
- **Secure Checkout:** In the cart, click "Checkout" to see our fully-integrated Stripe payment modal.
- **Add to Favorites:** Click the heart icon on any product card or details page to easily save it for later.

## 📁 Available Scripts

| Command           | Description                                                      |
| :---------------- | :--------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot-reload.                       |
| `npm run build`   | Compile TypeScript and build the app for production.             |
| `npm run preview` | Preview the production build locally.                            |
| `npm run lint`    | Run ESLint to find code style issues and automatically fix them. |
| `npm run format`  | Run Prettier to format source code.                              |

## 👨‍💻 Meet the Team

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/dmytro-halieba">
        <img src="https://github.com/dmytro-halieba.png" width="100px;" alt="Dmytro Halieba" style="border-radius: 50%;" /><br />
        <sub><b>Dmytro Halieba</b></sub>
      </a><br />
      👑 <b>Team Lead / Developer</b>
    </td>
    <td align="center">
      <a href="https://github.com/Staskovych">
        <img src="https://github.com/Staskovych.png" width="100px;" alt="Stanislav Mosakov" style="border-radius: 50%;" /><br />
        <sub><b>Stanislav Mosakov</b></sub>
      </a><br />
      🎯 <b>Project Manager / Developer</b>
    </td>
    <td align="center">
      <a href="https://github.com/pupsao">
        <img src="https://github.com/pupsao.png" width="100px;" alt="Dmytro Kerziuk" style="border-radius: 50%;" /><br />
        <sub><b>Dmytro Kerziuk</b></sub>
      </a><br />
      💻 Developer
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/AdelinaY18">
        <img src="https://github.com/AdelinaY18.png" width="100px;" alt="Adelina Yovdii" style="border-radius: 50%;" /><br />
        <sub><b>Adelina Yovdii</b></sub>
      </a><br />
      💻 Developer
    </td>
    <td align="center">
      <a href="https://github.com/Renata11111-afk">
        <img src="https://github.com/Renata11111-afk.png" width="100px;" alt="Renata Khotiakova" style="border-radius: 50%;" /><br />
        <sub><b>Renata Khotiakova</b></sub>
      </a><br />
      💻 Developer
    </td>
    <td align="center">
      <a href="https://github.com/Starkillerr">
        <img src="https://github.com/Starkillerr.png" width="100px;" alt="Oleksandr Braslavskyi" style="border-radius: 50%;" /><br />
        <sub><b>Oleksandr Braslavskyi</b></sub>
      </a><br />
      💻 Developer
    </td>
  </tr>
</table>

---

<p align="center">
  <strong>Made with ❤️ by the Team</strong>
</p>
