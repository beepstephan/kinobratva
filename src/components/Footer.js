import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="bg-amber-200 shadow dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Кінобратва™</a>. Всі права захищені.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="about" className="hover:underline me-4 md:me-6">Про застосунок</Link>
          </li>
          <li>
            <a href="https://discord.gg/JPtD6eDN" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Discord</a>
          </li>
          <li>
            <a href="https://t.me/adoremyvibe" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Telegram</a>
          </li>
          <li>
            <a href="https://github.com/beepstephan" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
          </li>
        </ul>
        </div>
    </footer>
  )
}
