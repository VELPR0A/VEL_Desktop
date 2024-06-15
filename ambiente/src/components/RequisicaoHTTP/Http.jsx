export default function Http(Mt, data){
    let option = {
        method: Mt, 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    return option;
};  