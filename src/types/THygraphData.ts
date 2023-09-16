import type { RichTextContent } from "@graphcms/rich-text-types";

export type TEducation = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TExperience = {
  name: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
};

export type TTechnology = {
  name: string;
  iconSvg: string;
  startDate: string;
};

export type TSocialMedia = {
  name: string;
  logoSvg: string;
  url: string;
};

export type TProject = {
  id: string;
  name: string;
  prodUrl: string;
  repoUrl: string;
  description: string;
  projectTechnologies: {
    iconSvg: string;
    id: string;
    name: string;
  }[];
};

export type THomePageData = {
  page: {
    name: string;
    headline: string;
    aboutPicture: {
      url: string;
    };
    aboutme: {
      raw: RichTextContent;
    };
    educations: TEducation[];
    experiences: TExperience[];
    technologies: TTechnology[];
    info: {
      email: string;
      phone: string;
      curriculum: {
        svg: string;
        file: {
          url: string;
        };
      };
      socialMedias: TSocialMedia[];
    };
  };
};

export type TProjectsPageData = {
  page: {
    id: string;
    projects: TProject[];
  };
};
