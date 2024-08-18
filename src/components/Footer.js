import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    /*<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-amber-200 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Кінобратва</Link>. Всі права захищені.</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <Link to="about" className="hover:underline me-4 md:me-6">Про застосунок</Link>
          </li>
          <li>
              <a href="https://discord.gg/JPtD6eDN" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Discord</a>
          </li>
          <li>
              <a href="https://t.me/assaultvibes" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Telegram</a>
          </li>
          <li>
              <a href="https://github.com/beepstephan" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
          </li>
      </ul>
    </footer>*/
    <footer class="bg-amber-200 shadow dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Кінобратва™</a>. Всі права захищені.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="about" className="hover:underline me-4 md:me-6">Про застосунок</Link>
          </li>
          <li>
            <a href="https://discord.gg/JPtD6eDN" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Discord</a>
          </li>
          <li>
            <a href="https://t.me/assaultvibes" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Telegram</a>
          </li>
          <li>
            <a href="https://github.com/beepstephan" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
          </li>
        </ul>
        </div>
    </footer>
  )
}
