// app/common/constants/atexo/atexo-rest.constant.ts
/**
 *
 * @name atexo-rest.constant.ts
 *
 */

import {RequestMethod} from 'angular2/http';
import {RequestUrlType} from './atexo-enum.constant';

export const AtexoRestConstant = {
    baseUrl: 'http://rsem-pic/dashboard/',
    _format: 'json',
    request: {
        panel: {
            all: {
                method: RequestMethod.Get,
                url: 'server/mocks/panel.json',
                type: RequestUrlType.Relative,
                _format: 'json',
                parameter: {
                    limit: 5,
                    offset: 0
                }
            },
            byId: {
                method: RequestMethod.Get,
                url: 'panel/',
                type: RequestUrlType.Relative
            }
        },
        news: {
            all: {
                method: RequestMethod.Get,
                url: 'news',
                type: RequestUrlType.Relative,
                _format: 'json',
                parameter: {
                    limit: 5,
                    offset: 0
                }
            },
            byId: {
                method: RequestMethod.Get,
                url: 'news/',
                type: RequestUrlType.Relative
            }
        }
    }
};

