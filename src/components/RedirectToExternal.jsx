import { useEffect } from "react";

function RedirectToExternal({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="text-center text-lg font-semibold mt-10">
      Redirecting to external site...
    </div>
  );
}

export default RedirectToExternal;