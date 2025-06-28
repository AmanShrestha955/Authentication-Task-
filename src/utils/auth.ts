export function checkAuth(): boolean {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
