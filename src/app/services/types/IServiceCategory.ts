interface IServiceCategoryBase {
  pk: number;
  slug: string;
  category_name_en: string;
  category_name_tr: string;
  category_name_ru: string;
  category_name_ar: string;
}

export interface IServiceCategory extends IServiceCategoryBase {
  children: IServiceSubCategory[];
}

export interface IServiceSubCategory extends IServiceCategoryBase {
  parent: number;
}