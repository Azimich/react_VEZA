interface IBim {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  date?: string;
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
  parent: number;
  title?: string;
  desc?: string;
  category?: string;
}
interface IQuestions {
  id?: number;
  title?: string;
  desc?: string;
  alias?: string;
}
interface IQuestionnaires {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alias?: string;
  parent?: number;
}

export { IBim, ICatalog, ICertificates, IQuestions, IQuestionnaires };
