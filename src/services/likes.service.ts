import {CreateLikeInputModel} from "../models/likes/CreateLikeInputModel";
import {LikesHistoryRepositoryClass} from "../repositories/likes-history-repository-class";

export class LikesHistoryServiceClass {

    constructor(protected LikesHistoryRepository: LikesHistoryRepositoryClass) {} // UserRepository создадим в composition-root

    async createLike(likeData: CreateLikeInputModel): Promise<any> {

        await this.LikesHistoryRepository.createLike(likeData)

        return likeData.status

    }
}
