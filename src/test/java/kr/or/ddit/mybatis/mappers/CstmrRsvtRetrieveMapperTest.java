package kr.or.ddit.mybatis.mappers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;

import kr.or.ddit.AbstractRootContextTest;
import kr.or.ddit.global.vo.RsvtDetailsVO;
import kr.or.ddit.global.vo.RsvtVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
class CstmrRsvtRetrieveMapperTest extends AbstractRootContextTest{

	@Inject
	 private CstmrRsvtRetrieveMapper dao;
	
	@Test
	void test() {
		String cstNo = "RSV24030013";
		
		List<RsvtDetailsVO> mberRsvtList = dao.selectCancelRsvtDetailsList(cstNo);
		int rsvtCnt = mberRsvtList.size();
		log.info("rsvtCnt:{}",rsvtCnt);
	}
	
	@Test
	void test2() {
		String cstNo = "M1800005";
		String rsvtNo = "RSV24030013";
		String cstHp = "";
//		List<RsvtVO> rsvtList = dao.selectMberRsvtList(cstNo);
		List<RsvtVO> rsvtLi = dao.selectMberEndRsvtList(cstNo);
		List<RsvtDetailsVO> rsvtList = dao.selectEndRsvtDetailsList(rsvtNo);		
	}

}
