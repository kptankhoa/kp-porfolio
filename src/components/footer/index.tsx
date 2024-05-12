const Footer = ({ name }: { name: string }) => {

  return (
    <footer>
      <p className="text-center w-full">
          &copy; 2024. Made with ❤ by {name}
      </p>
    </footer>
  );
};
export default Footer;
