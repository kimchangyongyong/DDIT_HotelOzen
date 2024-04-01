package kr.or.ddit.mybatis.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.vo.MberNoticeVO;

@Mapper
public interface MberNoticeMapper extends AbstractCommonMapper<MberNoticeVO, String>{

	/**
	 * 고객 공지사항 조회
	 * @return
	 */
	public List<MberNoticeVO> mberNoticeList(PaginationInfo paging);
	
	public int selectTotalRecord(PaginationInfo paging);
	
	/**
	 * 고객 공지사항 상세조회
	 * @return
	 */
	public MberNoticeVO mberNoticeView(String mberNtNo);
}
