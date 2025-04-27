const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: ['stylelint-config-recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering, 
    'order/properties-order': propertyOrdering,
  },
};
