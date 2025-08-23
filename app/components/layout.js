export default function Layout(content) {
  return `
    <nav class="pc-navigation text-gray-500 fixed top-0 left-0 w-1/5 h-100% hidden md:flex flex-col text-2xl font-medium px-3 py-4  gap-2">
      <div style="background-image: url(images/logo_00000.png);" class="logo mb-12 w-32 h-16 bg-no bg-no-repeat"></div>

      <a href="#/" class="flex flex-row items-center bg-[#e7e7e7] px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:home" class="text-4xl"></iconify-icon>
        <p>Home</p>
      </a>

      <a href="#/discover" class="flex flex-row items-center bg-[#e7e7e7] px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:search" class="text-4xl"></iconify-icon>
        <p>Discover</p>
      </a>

      <a href="#/bookmarks" class="flex flex-row items-center bg-[#e7e7e7] px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:bookmark" class="text-4xl"></iconify-icon>
        <p>Bookmarks</p>
      </a>

      <a href="#/community" class="flex flex-row items-center bg-[#e7e7e7] px-3 py-2 rounded-xl gap-2">
        <iconify-icon icon="fluent:people-community-24-regular" class="text-5xl"></iconify-icon>
        <p>Community</p>
      </a>

      <a href="#/profile" class="flex flex-row items-center bg-[#e7e7e7] px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:user" class="text-4xl"></iconify-icon>
        <p>Profile</p>
      </a>
    </nav>

    <nav class="mobile-navigation fixed bottom-0 left-0 w-full h-16 bg-white flex md:hidden justify-between text-base font-medium text-gray-500 px-3 py-2 border-t border-gray-400 gap-2 z-50">

      <a href="#/" class="flex flex-row items-center bg-white px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:home" class="text-4xl text-white"></iconify-icon>
      </a>

      <a href="#/discover" class="flex flex-row items-center bg-white px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:search" class="text-4xl"></iconify-icon>
      </a>

      <a href="#/bookmarks" class="flex flex-row items-center bg-white px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:bookmark" class="text-4xl"></iconify-icon>
      </a>

      <a href="#/community" class="flex flex-row items-center bg-white px-3 py-2 rounded-xl gap-2">
        <iconify-icon icon="fluent:people-community-24-regular" class="text-5xl"></iconify-icon>
      </a>

      <a href="#/profile" class="flex flex-row items-center bg-white px-3 py-2 rounded-xl gap-5">
        <iconify-icon icon="lucide:user" class="text-4xl"></iconify-icon>
      </a>
    </nav>

    <main id="main-content" class="w-full pb-20 md:ml-[20%] md:w-4/5 flex flex-col items-center gap-2 px-5 py-5 border-l border-gray-300 bg-white h-full">
      ${content}
    </main>
  `;
}
