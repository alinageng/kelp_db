export default {
  optionsArray: [],

  populateDropdownOptions() {
    this.optionsArray = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D', value: 'D' },
      { label: 'F', value: 'F' }
    ];
  },
	
  myFun1() {
    return this.populateDropdownOptions();
  },
};
