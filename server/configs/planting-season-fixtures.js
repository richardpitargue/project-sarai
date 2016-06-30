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
        

        const today = new Date();
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

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today.toLocaleDateString(),
            'targetEndDate': today2.toLocaleDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc26H (MAGAT)'
        });

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today3.toLocaleDateString(),
            'targetEndDate': today4.toLocaleDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc18 (Ala)'
        });

        PlantingSeasons.insert({
            'farmerId': farmerId,
            'active': true,
            'startDate': today5.toLocaleDateString(),
            'targetEndDate': today6.toLocaleDateString(),
            'crop': 'rice',
            'variety': 'PSB Rc52 (GANDARA)'
        });
    });
}