export const timeType = Object.freeze({
    totalType: 'TotalType',
    unbillType: 'UnbillType',
    billType: 'BillType',
    hardType: 'HardType',
    softType: 'SoftType',
  });

  export const getTotalText = (typeOfTime) => {
    switch (typeOfTime) {
        case timeType.totalType:
          return { mainText: 'TotalTime', toTotal: 'To Total: ' };
        case timeType.unbillType:
          return { mainText: 'Unbillable Time', toTotal: 'To Total: ' };
          case timeType.billType:
          return { mainText: 'Bilable Time', toTotal: 'To Total: ' };
          case timeType.hardType:
          return { mainText: 'Hard Bilable', toTotal: 'To Total: ', bilable:'Bilable: ' };
          case timeType.softType:
          return { mainText: 'Soft Bilable', toTotal: 'Total: ', bilable:'Bilable: ' };
        default:
          return { mainText: 'Default Text', toTotal: 'Total: ' };
      }
  }