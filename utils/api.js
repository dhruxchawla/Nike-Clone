

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};
