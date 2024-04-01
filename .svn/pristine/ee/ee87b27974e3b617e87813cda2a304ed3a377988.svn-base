package kr.or.ddit.mybatis.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.EmpVO;
import kr.or.ddit.global.vo.FxtrsRqstVO;

@Mapper
public interface EmpFxtrsRqstMapper{
	
	/**
	 * 요청서 목록 조회
	 * @param paging 
	 * @return
	 */
	public List<FxtrsRqstVO> selectList(PaginationInfo paging);
	
	/**
	 * 사번을 이름으로 바꾸는 쿼리
	 * @param empNo
	 * @return
	 */
	public FxtrsRqstVO selectEmpName(String empNo); 
	
	public int selectTotalRecord(PaginationInfo paging);
}
