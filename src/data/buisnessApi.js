import axios from 'axios';

//  POST /business - create new business
//  body: userId
//      business - json thats include business details
export const addBusiness = async (userId,business) => 
{
    try {
        return await axios.post('https://meetings-test.herokuapp.com/business/'+ userId, business.json());} 
    catch (error){
        console.log('can not add business',error);}
}

//GET /business/:userId - get business details of specific user id.
export const loadBuisness = async (userId) => 
{
    try {
        const { buisness } = await axios.get('https://meetings-test.herokuapp.com/business/${userId}',userId);
        return buisness;
    } 
    catch (error) {
        console.log('can not get business', error);}
}

//GET /business - get list of all businesses
 export const loadAllBusiness= async () => 
{
    try {
        const { allBusiness } = await axios.get('https://meetings-test.herokuapp.com/business');
        return allBusiness;
    } 
    catch (error) {
        console.log('can not get all business', error);}
}

//optional: query business_id - return specific business by id
export const getBusinessById = async (business_id) => 
{
    try {
        const { buisness } = await axios.get('https://meetings-test.herokuapp.com/business/${business_id}',business_id);
        return buisness;
    } 
    catch (error) {
        console.log('can not get business', error);}
}

//PUT /business/:id
export const UpdateBusiness = async (id) => 
{
    try {
        return await axios.put('https://meetings-test.herokuapp.com/business'+id);} 
    catch (error){
        console.log('can not update business', error);}
}



