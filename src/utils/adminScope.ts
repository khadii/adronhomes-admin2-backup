import { useLocation } from "react-router-dom";

export const getScopedAdminPath = (pathname: string, path: string) => {
  if (!path.startsWith("/")) {
    return path;
  }

  return pathname.startsWith("/daff") ? `/daff${path}` : path;
};

export const useScopedAdminPath = () => {
  const location = useLocation();

  return (path: string) => getScopedAdminPath(location.pathname, path);
};
