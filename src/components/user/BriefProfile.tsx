import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";
import * as React from "react";
interface UserProfile  {
    "name": string,
    "role": string
    "avatarSource"? : string,
    "avatarAlt": string,
    "avatarFallBack": string,
}

const BriefProfile: React.FC<UserProfile> = ({name, role, avatarSource, avatarAlt, avatarFallBack}  ) => {
    return (
        <div className='flex items-center space-x-4'>
            <Avatar>
                <AvatarImage
                    src={avatarSource}
                    alt={avatarAlt}

                />
                <AvatarFallback className={'dark bg-white text-black'}>{avatarFallBack}</AvatarFallback>
            </Avatar>
            <div>
                <p className='text-lg font-medium leading-none text-white'>{name}</p>
                <p className='text-sm text-muted-foreground'>{role}</p>
            </div>
        </div>
    )
}
export default BriefProfile
