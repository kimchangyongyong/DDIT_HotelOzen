package kr.or.ddit.mybatis.mappers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;

import kr.or.ddit.AbstractRootContextTest;
import kr.or.ddit.global.common.paging.PaginationInfo;
import lombok.extern.slf4j.Slf4j;

@Slf4j
class EmpFxtrsUseMapperTest extends AbstractRootContextTest{

	@Inject
	private EmpFxtrsUseMapper dao;
	
	@Test
	void testSelectList() {
		PaginationInfo paging = new PaginationInfo();
		
		paging.setCurrentPage(1);
		
		log.info("{}", dao.selectList(paging));
	}

}
