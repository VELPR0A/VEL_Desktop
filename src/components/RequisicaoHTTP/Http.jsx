export default function Http(Mt, data){
    let option = {
        method: Mt, 
        body: JSON.stringify(data),
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
    }

    return option;
};  