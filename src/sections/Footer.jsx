export default function Footer() {
  return (
    <>
      <footer class="px-6 py-8 text-sm">
        <div class="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row">
          <span>© {new Date().getFullYear()} Milpestcon Pest Control Services · Bulakan, Bulacan</span>
          <a href="tel:+639667085441" class="font-bold">Call us at (+63) 966-708-5441</a>
        </div>
      </footer>
    </>
  )
}
