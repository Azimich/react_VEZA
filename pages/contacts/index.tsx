import { useRouter } from "next/router";
import { contactsPath } from "utils/bootstrap";

function RedirectPage() {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== "undefined") {
    router.push(contactsPath + "sale_office");
    return;
  }
}

RedirectPage.getInitialProps = (ctx: {
  res: {
    writeHead: (arg0: number, arg1: { Location: string }) => void;
    end: () => void;
  };
}) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: contactsPath + "sale_office" });
    ctx.res.end();
  }
  return { data: "" };
};

export default RedirectPage;
