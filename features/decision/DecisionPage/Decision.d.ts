export interface IEditModal {
  description?: string;
  title?: string;
  imageUrl?: string;
  toggle?: () => void;
  alias?: string;
  shortDescription?: string;
  seoTitle?: string;
  seoMetaH1?: string;
  seoDescription?: string;
  seoKeyword?: string;
}
