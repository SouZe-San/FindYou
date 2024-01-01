import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h1 class="text-6xl font-bold head_text">404 - Wrong Destiny 😖</h1>
          <p class="my-4" style={{ fontSize: "11px", color: "#a4a3a1" }}>
            We couldn't find the page you were looking for. Kaire !! Shoo,
            shoo!!
          </p>

          <button className="back_btn">
            <a href="/">HomE</a>
          </button>
        </div>
      </div>
    </>
  );
}
