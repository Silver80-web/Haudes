export const getAllEmails = async () => {

    const orderEmails = (response) => {
        let orderedEmails = [];
        response.map((object) => {
            for(let key in object){
                orderedEmails.push(object[key]);
            }
    })
        return orderedEmails;   
    };
    
    try {
        const response = await axios.get('http://localhost:5000/students/emails');
        const emails = orderEmails(response.data);
        
        return emails;
    } catch (error) {
        console.error(error);
    }
};

export const getInfo = async () => {
    try{
        const response = await axios.get('http://localhost:5000/students/info');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

