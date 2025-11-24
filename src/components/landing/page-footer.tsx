export const PageFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-x-6 mb-4">
          <a href="#" className="text-sm leading-6 hover:text-brand-yellow">Política de Privacidade</a>
          <a href="#" className="text-sm leading-6 hover:text-brand-yellow">Termos de Uso</a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};