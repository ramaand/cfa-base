export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900">
      <div className="flex flex-wrap flex-row text-center lg:text-left px-3 py-4 lg:py-5">
        <div className="lg:order-2 flex-shrink max-w-full px-3 lg:px-4 w-full lg:w-1/2 mb-2 lg:mb-0">
          <div className="flex flex-row space-x-4 justify-center lg:justify-end">
            <a className="hover:text-cyan-500" href="#">
              About
            </a>
            <a className="hover:text-cyan-500" href="#">
              Pricing
            </a>
            <a className="hover:text-cyan-500" href="#">
              Tos
            </a>
            <a className="hover:text-cyan-500" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:order-1 flex-shrink max-w-full px-3 lg:px-4 w-full lg:w-1/2">
          <p>2024 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
