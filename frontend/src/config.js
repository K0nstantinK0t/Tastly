export default {
    serverUrl: 'http://api.tastly.com/',
    registrationUrl: 'http://api.tastly.com/register',
    authUrl: 'http://api.tastly.com/token',
    addPointsUrl: 'http://api.tastly.com/points/add',
    logOutUrl: 'http://api.tastly.com/logout',
    createDishUrl: 'http://api.tastly.com/dishes',
    getDishesUrl: 'http://api.tastly.com/dishes',
    deleteDishUrl: function(dish_id){
        return 'http://api.tastly.com/dishes/' + dish_id
    }
}