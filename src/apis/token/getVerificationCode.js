import httpInstance from "@/utils/http";

export const getVerificationCode = () => {
    return httpInstance.get(`/shuyixiao/v1/getVerificationCode`);
};


