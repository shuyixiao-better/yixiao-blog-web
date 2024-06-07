import httpInstance from "@/utils/http";

export const getHotAPI = (type) => {
    return httpInstance.get(`/shuyixiao/v1/hot`, {
        params: {
            type: type
        }
    });
};

