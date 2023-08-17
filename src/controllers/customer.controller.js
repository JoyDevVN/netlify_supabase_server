import customerService from "../services/customer.service.js"

export const getHotelList = async (req, res) => {
    const id = req.params.id;
    const { result, error } = await customerService.getHotelList(id);
    if (error) {
        return res.status(401).json({ message: error });
    }
    res.status(200).json({ message: result });
};

export const getRoomAmenity = async (req, res) => {
    const id = req.params.id;
    const { result, error } = await customerService.getRoomAmenity(id);
    if (error) {
        return res.status(401).json({ message: error });
    }
    res.status(200).json({ message: result });
};

export default class customerController {
    static getHotelList = getHotelList;
    static getRoomAmenity = getRoomAmenity;
}