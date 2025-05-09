export default function Footer() {
    return (
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </footer>
    );
  }