import TokenService from "@services/TokenService";
import RedirectModal from "@shared/components/modals/RedirectModal";

interface Props {
  children: React.ReactNode;
};

function AuthGuard({ children }: Props) {
  const token = TokenService.obtain();
  if (!token) return (
    <div>
      {children}
      <RedirectModal></RedirectModal>
    </div>
  );
  return children;
};

export default AuthGuard;