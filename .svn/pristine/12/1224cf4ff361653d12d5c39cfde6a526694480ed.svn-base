package kr.or.ddit.mybatis.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.or.ddit.global.vo.MbrshBnfVO;
import kr.or.ddit.global.vo.MbrshGrdVO;

@Mapper
public interface MbrshMapper {
	public List<MbrshGrdVO> selectDetail(String grd);

	public List<MbrshGrdVO> selectList();

	public List<MbrshGrdVO> selectBenefit(String grd);
	
	public MbrshGrdVO selectOne(String grd);
	
	public List<MbrshBnfVO> selectCouponList(String grd);
}
