import httpInstance from "@/utils/http";

export const getAllArticles = () => {
    return httpInstance.get(`/shuyixiao/v1/getAllArticles`);
};

export const getArticleById = (articleId) => {
    return httpInstance.get(`/shuyixiao/v1/getArticleById`, {
        params: { id: articleId }
    });
};

