interface IbreadcrumbsData {
  title: string;
  id: number;
  parent_id?: number;
  level?: number;
  alias?: string;
  back?: boolean;
}

export { IbreadcrumbsData };
