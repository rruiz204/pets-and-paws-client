import AuthGuard from "@core/guards/AuthGuard";

interface Props {
  children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  );
};

export default PageLayout;