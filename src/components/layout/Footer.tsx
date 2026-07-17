export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 mt-20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ghassan Salah. Designed with passion.
        </p>
      </div>
    </footer>
  );
}
