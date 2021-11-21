import { Images } from '../../models/Images';
import { Rooms } from '../../models/Rooms';
import { Schedules } from '../../models/Schedules';
import { Users } from '../../models/Users';

class ConfigService {

    public getEntites(): Array<any> {
        return [
            Users,
            Rooms,
            Schedules,
            Images
        ]
    }
}

export default new ConfigService();