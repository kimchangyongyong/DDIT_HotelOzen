package kr.or.ddit.emp.pms.room.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.RoomVO;
import kr.or.ddit.mybatis.mappers.EmpRoomMapper;

@Service
public class EmpPmsRoomListServiceImpl implements EmpPmsRoomListService {

	@Inject
	private EmpRoomMapper dao;
	
	@Override
	public List<RoomVO> retieveRoomList(PaginationInfo paging) {
		
		int totalRecord = dao.selectTotalRecord(paging);
		paging.setTotalRecord(totalRecord);
		
		List<RoomVO> roomList =  dao.selectList(paging);
		return roomList;
	}

}
