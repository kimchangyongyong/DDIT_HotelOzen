package kr.or.ddit.mybatis.mappers;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import kr.or.ddit.global.vo.AttatchRmTypeVO;
import kr.or.ddit.global.vo.CstmrVO;
import kr.or.ddit.global.vo.RecomRoomVO;
import kr.or.ddit.global.vo.RoomTypeVO;
import kr.or.ddit.global.vo.RsvtDetailsVO;
import kr.or.ddit.global.vo.RsvtVO;
import kr.or.ddit.global.vo.SetleVO;

@Mapper
public interface CstmrRsvtMapper extends AbstractCommonMapper<CstmrVO, String>{

	List<RecomRoomVO> selectRcRm(Map<String, Object> parameterMap);
	
	AttatchRmTypeVO selectRmt(String rmType);
	
	List<RoomTypeVO> selectRsvtRmt(Map<String, Object> parameterMap);
	
	int insertRsvt(RsvtVO rsvt);
	
	int insertRsvtDetails(RsvtDetailsVO rsvtDetail);
	
	int insertNber(CstmrVO nber);
	
	int insertSetle(SetleVO setle);
}
