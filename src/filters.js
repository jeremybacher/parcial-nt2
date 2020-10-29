const formatDate = require('dateformat');
export default  {
    methods : {
      dateFormat : function(date) {
        return formatDate(new Date(date), "dd/mm/yyyy h:mm:ss");
      },
      addMoneySign : function(amount) {
        return "$" + amount;
      }
    }
}