package kr.or.ddit.cstmr.rsvt.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import kr.or.ddit.enumpkg.ServiceResult;
import kr.or.ddit.global.vo.AttatchRmTypeVO;
import kr.or.ddit.global.vo.CstmrVO;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.RecomRoomVO;
import kr.or.ddit.global.vo.RoomTypeVO;
import kr.or.ddit.global.vo.RsvtDetailsVO;
import kr.or.ddit.global.vo.RsvtVO;
import kr.or.ddit.mybatis.mappers.CstmrRsvtMapper;
import kr.or.ddit.mybatis.mappers.MberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CstmrRsvtServiceImpl implements CstmrRsvtService {

	private final CstmrRsvtMapper dao;
	
	private final MberMapper mdao;
	
	@Override
	public CstmrVO retrieveCstmrAge(String cstNo) {
		CstmrVO cstmr = dao.select(cstNo);
		return cstmr;
	}

	@Override
	public List<RecomRoomVO> retrieveRcRm(Map<String, Object> customerData) {
		List<RecomRoomVO> rcRm = dao.selectRcRm(customerData);
		return rcRm;
	}

	@Override
	public AttatchRmTypeVO retrieveRmt(String rmType) {
		AttatchRmTypeVO attRmt = dao.selectRmt(rmType);
		return attRmt;
	}

	@Override
	public List<RoomTypeVO> retrieveRsvtRmt(Map<String, Object> rsvtData) {
		List<RoomTypeVO> rsvtRmt = dao.selectRsvtRmt(rsvtData);
		
		String rmtTypeCd = rsvtRmt.iterator().next().getRmtTypeCd();
		
		dao.selectRmt(rmtTypeCd);
		
		return rsvtRmt;
	}

	@Override
	public MberVO retrieveMber(String cstNo) {
		return mdao.select(cstNo);
	}

	@Override
	public ServiceResult createNewRsvt(Map<String,Object> rsvtData) {
//		rsvtData.get
//		dao.insertSetle(null);
//		dao.insertRsvt(newRsvt);
//		dao.insertRsvtDetails(null);
			
		return null;
	}

	@Override
	public ServiceResult createNewSetle(RsvtVO newSetle) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceResult createNewRsvtDetail(RsvtDetailsVO newRsvtDetail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceResult createNewNber(CstmrVO newNber) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
