interface IBim {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  alias?: string;
}
interface ICatalog {
  id: number;
  title?: string;
  image?: string;
  download_url?: string;
  alias?: string;
}
interface ICertificates {
  id?: number;
  image?: string;
  download_url?: string;
  alias?: string;
}
interface IQuestions {
  id?: number;
  title?: string;
  desc?: string;
  alias?: string;
}

export { IBim, ICatalog, ICertificates, IQuestions };
