import {FarmerData, PlantingSeasons} from '/lib/collections';

if(FarmerData.find().count() == 0) {
    FarmerData.insert({
        'name': {
            'first': 'Juan Carlo',
            'middle': 'Manlusoc',
            'last': 'Mangaliag'
        }
    }, (err, farmerId) => {
        if(err)
            console.log(err);
        

        const today = new Date(),
              today2 = new Date(),
              today3 = new Date(),
              today4 = new Date(),
              today5 = new Date(),
              today6 = new Date();

        today2.setMonth(today.getMonth() + 2);
        today3.setMonth(today.getMonth() - 1);
        today4.setMonth(today.getMonth() + 1);
        today5.setMonth(today.getMonth() - 2);
        today6.setMonth(today.getMonth() + 1);

        const irrigationSchedule = [];

        for(let i = 0; i < 5; i++) {
            let now = new Date();
            now.setDate(now.getDate() - i);
            irrigationSchedule.push({
                'date': now.toDateString(),
                'amount': '15'
            });
        }

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today.toDateString(),
            'targetEndDate': today2.toDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc26H (MAGAT)',
            'irrigationSchedule': irrigationSchedule
        });

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today3.toDateString(),
            'targetEndDate': today4.toDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc18 (Ala)',
            'irrigationSchedule': irrigationSchedule
        });

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today5.toDateString(),
            'targetEndDate': today6.toDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc52 (GANDARA)',
            'irrigationSchedule': irrigationSchedule
        });
    });
}