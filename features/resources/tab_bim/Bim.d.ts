interface IBim {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
}
interface ICatalog {
  id: number;
  title?: string;
  image?: string;
  download_url?: string;
  alias?: string;
}

export { IBim, ICatalog };
